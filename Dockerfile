FROM python:latest
WORKDIR /app
ENV PYTHONUNBUFFERED 1
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY .env .env
COPY . .
ENV $(cat .env | xargs)
COPY entrypoint.sh entrypoint.sh
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
RUN dos2unix entrypoint.sh
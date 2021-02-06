FROM python:3

LABEL maintainer="ddrrpg"

ENV PYTHONUNBUFFERED 1

COPY . .

RUN pip install -r requirements.txt

WORKDIR /var/backend

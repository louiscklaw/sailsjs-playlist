#!/usr/bin/env bash

set -ex

docker compose up -d
docker compose ps

docker compose exec -it nodejs bash
# docker compose logs -f

#!/usr/bin/env bash

set -x
rm -rf test-project

set -ex

npx sails new test-project --fast

# mkdir test-project

pushd test-project
  npm i -D

  npx sails lift
popd


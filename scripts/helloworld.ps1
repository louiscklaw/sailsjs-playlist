Remove-Item  -Recurse -Force  my-app
npx sails new my-app --fast

pushd my-app
  npm install
popd
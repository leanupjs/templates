rm -rf $1-$2
mkdir $1-$2
cd $1-$2
npm i @leanup/cli@$2 @leanup/cli-$1@$2
npx $1 create
npm start

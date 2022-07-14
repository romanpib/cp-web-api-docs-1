# Make sure to have a vue.config.js file in the root of the project, have set the publicPath, and set the remote origin to the correct url
while getopts m: flag
do
    case "${flag}" in
        m) message=${OPTARG};;
    esac
done

# Build the app
npm run build

# Copy the content of the built index.html to to a new file named 404.html
cp ./dist/index.html ./dist/404.html

# Stage the dist directory
git add dist

# Commit the changes
git commit -m "$message"

# Push the content of the dist directory to the gh-pages subtree
git subtree push --prefix dist origin gh-pages
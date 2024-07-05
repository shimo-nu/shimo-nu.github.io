
IMAGE=react-webpage

docker run \
    -it \
    --rm \
    -v ${PWD}:/reactapp \
    -p 13000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    $IMAGE:latest
    bash
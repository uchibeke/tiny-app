# Tiny app

A simple web app that uses Docker to deploy new production builds.

## Assumptions

- The program is a web app that runs internally in a client's network
- The program will be shipped as docker images
  - Each release will include a commit hash which the client, internal developers and other stakeholder can use to track and trace issues
  - The program will have some form of CI/CD setup
- The release will happen as follows:
  - Release
    - Push to Docker Hub or private image registry with a tag via `make push`
  - Pre-production
    - Start new container with new application code
    - Tests by client
  - Launch
    - After tests is satisfied, stop old container and delete

## Development Process

### Run locally in Dev

`make run-local` or `npm i && npm run dev`

### Run production version

`make run-production`

This will build and run your container locally :rocket:

## Release process

### Build the app

`make build`

### Push to client

`make push`

## Limitations and improvements

- Needs more testing
- Change from JS to potentially Go
- Look into using (watchtower)[https://github.com/containrrr/watchtower]
- Add a deployment and release doc
- Improve user account management: private registry vs hub

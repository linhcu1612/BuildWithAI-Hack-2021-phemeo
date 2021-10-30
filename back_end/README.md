# Data Backend

## Prerequisites

- [vscode](https://code.visualstudio.com/)
- [Python 3.9](https://www.python.org/downloads/)
- [pipenv](https://pypi.org/project/pipenv/) 
  - for environment management
- [sqlite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) 
  - for database testing
- [wsl](https://docs.microsoft.com/en-us/windows/wsl/install)
  - nice to have, easier for windows user to set up project
- [direnv](https://github.com/direnv/direnv)
  - nice to have, manage environment variables

## Set up

- [Connect vscode to wsl](https://code.visualstudio.com/blogs/2019/09/03/wsl2) if available

- Clone the repository and open it

- When `pipenv` installed, set up environment in terminal in the first time:

```bash
    cd back_end
    export PIPENV_VENV_IN_PROJECT="enabled"
    PIPENV_VERBOSITY=-1 PIPENV_VENV_IN_PROJECT=1 pipenv install 
    
```

## Local development

- Starting test environment

```bash

pipenv shell
export FLASK_APP=main.py 
flask run

```

- Navigate to: http://127.0.0.1:5000/graphql for query testing


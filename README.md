# MySQL GitHub Action [![Test status](https://github.com/moodlehq/mysql-action/workflows/test/badge.svg)](https://github.com/moodlehq/mysql-action/actions)

This [GitHub Action](https://github.com/features/actions) sets up a MySQL database in Docker.

It supports various MySQL options to accurately configure and execute MySQL. So it may not be your best choice when you just want to run a simple MySQL, see [The Default MySQL](#the-default-mysql).

It is based on the Docker container and is limited by Github Actions, which contains only Linux now. Therefore it does not work in Mac OS and Windows environment.

## Usage

```yaml
steps:
- uses: moodlehq/mysql-action@v2
  with:
    host port: 3800 # Optional, default value is 3306. The port of host
    container port: 3307 # Optional, default value is 3306. The port of container
    character set server: 'utf8' # Optional, default value is 'utf8mb4'. The '--character-set-server' option for mysqld
    collation server: 'utf8_general_ci' # Optional, default value is 'utf8mb4_general_ci'. The '--collation-server' option for mysqld
    mysql version: '8.0' # Optional, default value is "latest". The version of the MySQL
    mysql database: 'some_test' # Optional, default value is "test". The specified database which will be create
    mysql root password: ${{ secrets.RootPassword }} # Required if "mysql user" is empty, default is empty. The root superuser password
    mysql user: 'developer' # Required if "mysql root password" is empty, default is empty. The superuser for the specified database. Can use secrets, too
    mysql password: ${{ secrets.DatabasePassword }} # Required if "mysql user" exists. The password for the "mysql user"
    use tmpfs: true # Optional, default value is false. Mounts /var/lib/mysql to tmpfs (i.e. in RAM) for increased performance
    tmpfs size: '2048M' # Optional, default value is '1024M'. Desired size of above-mentioned tmpfs volume
    extra conf: | # Optional, default is ''. Other configuration options to be added on startup.
        --max_allowed_packet=16MB
        --skip-log-bin
        ...
```

See [Docker Hub](https://hub.docker.com/_/mysql) for available MySQL versions.

See [Creating and using secrets (encrypted variables)](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) for hiding database password.

## History, acknowledgement and appreciation
This repository is a fork of [johanmeiring/mysql-action](https://github.com/johanmeiring/mysql-action) (thanks for the [tmpfs patch](https://github.com/johanmeiring/mysql-action/commit/4a26b8c80727ba36919673edc9ceca942a98b1c4) there!) that is a fork of the original [mirromutth/mysql-action](https://github.com/mirromutth/mysql-action) (thanks for the [original action](https://github.com/marketplace/actions/setup-mysql) creation!).

In order to be able to apply some customisations needed to run our big test suites, and because the repositories above aren't active anymore, this fork has been created.

## License

This project is released under the [MIT License](LICENSE).
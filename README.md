# portalen
Forsiden på intranettet vårt

## Installasjon
```
$ git clone git@github.com:telemark/portalen.git
```

cd inn i directory og kjør setup

```
$ npm run setup
```

Fyr opp docker

```
$ docker-compose up
```

Funker ut av boksen satt opp mot testserveren til [forumsys](http://www.forumsys.com/en/tutorials/integration-how-to/ldap/online-ldap-test-server/)

Du når serveren på ip-for-docker port 80

Logininfo finnes på sidene til forumsys men en kombinasjon er f.eks. gauss/password

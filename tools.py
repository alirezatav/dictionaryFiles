
from weblate.trans.models.project import Project
from weblate.trans.models.component import Component

from os import listdir
import json

with open('stats.json') as f:
    d = json.load(f)


def save(i, h):
    project = Project.objects.get(name="Dictionary")
    component = Component(name=i, slug=i, project=project, vcs="git", repo="weblate://dictionary/a", repoweb="",
                          branch="master", filemask=h+"/"+i+"/*.json", template=h+'/'+i+"/en.json", new_base="", file_format="json", new_lang="add")
    component.save()
    print(' --end save -- '+i+"  in : "+h)


def readJSON(a):
    print(' --start read json --')
    for x in d[a]:
        if(x == "a"):
            continue
        print(x)
        save(x, a)


readJSON('0-9')
readJSON('b')
readJSON('c')
readJSON('d')
readJSON('e')
readJSON('f')
readJSON('g')
readJSON('h')
readJSON('i')
readJSON('j')
readJSON('k')
readJSON('l')
readJSON('m')
readJSON('n')
readJSON('o')
readJSON('p')
readJSON('q')
readJSON('r')
readJSON('s')
readJSON('t')
readJSON('u')
readJSON('v')
readJSON('w')
readJSON('x')
readJSON('y')
readJSON('z')



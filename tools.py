
from weblate.trans.models.project import Project
from weblate.trans.models.component import Component

from os import listdir
import json

with open('stats.json') as f:
    d = json.load(f)


def save(i, h):
    project = Project.objects.get(name="Dictionary-Translation")
    component = Component(name=i, slug=i, project=project, vcs="git", repo="weblate://Dictionary-Translation/a", repoweb="",
                          branch="master", filemask=h+"/"+i+"/*.json", template=h+'/'+i+"/en.json", new_base="", file_format="json", new_lang="add")
    component.save()
    print(' --end save --')


def readJSON(a):
    print(' --start read json --')
    for x in d[a]:
        if(x == "a"):
            continue
        print(x)
        save(x, a)


# readJSON('a')
save('a1','a')

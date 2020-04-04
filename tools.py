
from weblate.trans.models.project import Project
from weblate.trans.models.component import Component

from os import listdir
import json

def save(i):
    project = Project.objects.get(name="dictionary")
    component = Component(name=i,slug=i,project=project,vcs="git",repo="weblate://dictionary/buy",repoweb="",branch="master",filemask=i+"/translated/*.json",new_base="",file_format="json-nested",new_lang="add")
    component.save()

def readJSON(a):
    with open('stats.json') as f:
         d = json.load(f)
         for x in d[a]:
              print(x)              
            #   save(x)

readJSON('a')    
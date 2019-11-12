define({ "api": [  {    "type": "post",    "url": "/characters",    "title": "Creates Character",    "name": "CreateCharacter",    "group": "Character",    "parameter": {      "fields": {        "Character": [          {            "group": "Character",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ],        "Characters": [          {            "group": "Characters",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of Character.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "src/index.js",    "groupTitle": "Character"  },  {    "type": "get",    "url": "/characters",    "title": "Request User information",    "name": "GetCharacterList",    "group": "Character",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Name of Character.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "src/index.js",    "groupTitle": "Character"  }] });

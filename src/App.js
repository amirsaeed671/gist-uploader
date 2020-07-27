import React from "react";
import Form from "./Form";
// import {from} from 'rxjs'
// import {pluck, tap} from 'rxjs/operators'
// import axios from 'axios'

function App() {
  // useEffect(() => {
  //     from(axios({
  //         url: 'https://api.github.com/gists',
  //         method: 'POST',
  //         headers: {
  //             'Authorization': `token 125f3b4369ae33e33354b970f9b4b2e712a7e699`
  //         },
  //         data: {
  //                 "description": "Hello World Examples",
  //                 "public": true,
  //                 "files": {
  //                   "hello_world.rb": {
  //                     "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
  //                   },
  //                   "hello_world.py": {
  //                     "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
  //                   },
  //                   "hello_world_ruby.txt": {
  //                     "content": "Run `ruby hello_world.rb` to print Hello World"
  //                   },
  //                   "hello_world_python.txt": {
  //                     "content": "Run `python hello_world.py` to print Hello World"
  //                   }
  //                 }
  //             }
  //     })).pipe(
  //         tap(res => {
  //             debugger;
  //         })
  //     ).subscribe()
  // }, [])
  return <Form />;
}

export default App;

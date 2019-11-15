import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestName';
  username = '';
  serverCreated = false;
  servers = ['Test server 1', 'Test server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  resetUsername() {
    this.username = '';

  }

}

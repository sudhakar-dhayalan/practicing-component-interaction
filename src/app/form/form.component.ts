import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    @Output('serverCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output('blueprintCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

    newServerName: string;
    newServerContent: string;

    constructor() { }

    onAddServer() {
        this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    }
}
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChatbotRasaModule } from "angular-chat-widget-rasa";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChatbotRasaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

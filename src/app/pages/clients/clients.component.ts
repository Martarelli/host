import { loadRemoteModule } from '@angular-architects/native-federation';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [RouterModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements AfterViewInit {
  @ViewChild('navbarContainer', { read: ViewContainerRef })
  navbarContainer!: ViewContainerRef;

  @ViewChild('clientsContainer', { read: ViewContainerRef })
  clientsContainer!: ViewContainerRef;

  async ngAfterViewInit() {
    // Load Navbar MFE
    const navbarModule = await loadRemoteModule({
      remoteName: 'navbar',
      exposedModule: './NavbarComponent',
    });
    this.navbarContainer.createComponent(navbarModule.NavbarComponent);

    // Load Home MFE
    const clientsModule = await loadRemoteModule({
      remoteName: 'clients',
      exposedModule: './ClientsComponent',
    });
    this.clientsContainer.createComponent(clientsModule.ClientsComponent);
  }
}

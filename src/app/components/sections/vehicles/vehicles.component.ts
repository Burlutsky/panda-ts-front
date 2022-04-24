import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../../models/vehicle";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  private getVehicles() {
    this.vehicleService.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Vehicle} from "../../../models/vehicle";
import {ActivatedRoute, Router} from "@angular/router";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.sass']
})
export class VehiclesFormComponent implements OnInit {

  form: FormGroup;

  id: number;

  vehicle: Vehicle;

  constructor(
    private vehicleService: VehicleService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.vehicle = {
      id: 0,
      name: '',
      model: '',
      manufacturer: '',
      cost_in_credits: '',
      length: '',
      max_atmosphering_speed: '',
      crew: '',
      passengers: '',
      cargo_capacity: '',
      consumables: '',
      vehicle_class: '',
      pilots: [],
      films: [],
      created: '',
      edited: '',
      url: '',
    };

    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getVehicle();

    this.form = new FormGroup({
      name: new FormControl(this.vehicle.name,[Validators.required]),
      model: new FormControl(this.vehicle.model,[Validators.required]),
      manufacturer: new FormControl(this.vehicle.manufacturer,[Validators.required]),
      cost_in_credits: new FormControl(this.vehicle.cost_in_credits,[Validators.required]),
      length: new FormControl(this.vehicle.length,[Validators.required]),
      max_atmosphering_speed: new FormControl(this.vehicle.max_atmosphering_speed,[Validators.required]),
      crew: new FormControl(this.vehicle.crew,[Validators.required]),
      passengers: new FormControl(this.vehicle.passengers,[Validators.required]),
      cargo_capacity: new FormControl(this.vehicle.cargo_capacity,[Validators.required]),
      consumables: new FormControl(this.vehicle.consumables,[Validators.required]),
      vehicle_class: new FormControl(this.vehicle.vehicle_class,[Validators.required]),
      pilots: new FormControl(this.vehicle.pilots,[Validators.required]),
      films: new FormControl(this.vehicle.films,[Validators.required]),
      created: new FormControl(this.vehicle.created,[Validators.required]),
      edited: new FormControl(this.vehicle.edited,[Validators.required]),
      url: new FormControl(this.vehicle.url,[Validators.required]),
    });
  }

  private getVehicle() {
    if (this.id) {
      this.vehicleService.getVehicle(this.id).subscribe((data)=> {
        if (data) {
          this.vehicle = data;
          this.form.patchValue(this.vehicle);
        }
      });
    }
  }

  get f() {return this.form.controls}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    Object.assign(this.vehicle, this.form.value);

    if (this.id) {
      this.updateVehicle();
    } else {
      this.storeVehicle();
    }
  }

  private storeVehicle() {
    this.vehicleService.storeVehicle(this.vehicle).subscribe((data) => {
      if (data) {
        this.route.navigate(['vehicles']);
      }
    });
  }

  private updateVehicle() {
    this.vehicleService.updateVehicle(this.vehicle).subscribe((data) => {
      if (data) {
        this.route.navigate(['vehicles']);
      }
    });
  }
}

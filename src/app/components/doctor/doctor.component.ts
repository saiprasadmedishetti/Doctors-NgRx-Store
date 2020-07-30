import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import Doctor, { AppState } from '../../interfaces/doctor.interface';
import {
  GetDoctors,
  AddDoctor,
  UpdateDoctor,
  DeleteDoctor,
} from 'src/app/store/actions';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[];
  doctorName: string = '';
  isEdit: boolean = false;
  selectedDoctor: string = '';
  changedName: string = '';
  sortActiveColumn: string = '';
  previousOrder: string = '';
  @ViewChild('addInput') private inputRef: ElementRef;

  constructor(private store: Store<AppState>, private renderer2: Renderer2) {
    store.pipe(select('doctors')).subscribe((data) => {
      this.doctors = data;
    });
  }

  ngOnInit(): void {
    this.getDoctors();
  }
  getDoctors() {
    this.store.dispatch(new GetDoctors());
  }
  addDoctor(isFirst) {
    this.store.dispatch(
      new AddDoctor({
        id: this.doctors.length + 1,
        name: this.doctorName,
        isFirst,
      })
    );
    this.doctorName = '';
    this.renderer2.selectRootElement(this.inputRef.nativeElement).focus();
  }
  edit(id) {
    this.isEdit = true;
    this.selectedDoctor = id;
  }
  doctorChange(name) {
    this.changedName = name;
  }
  saveDoctor(doctor) {
    this.store.dispatch(
      new UpdateDoctor({ ...doctor, name: this.changedName })
    );

    this.changedName = '';
    this.isEdit = false;
    console.log(this.doctors);
  }
  deleteDoctor(doctor) {
    this.store.dispatch(new DeleteDoctor(doctor));
  }
  sort(order = 'id') {
    this.sortActiveColumn = order;
    console.log(this.previousOrder);
    if (this.previousOrder !== order) {
      this.doctors = [...this.doctors].sort((a, b) =>
        order === 'id' ? a[order] - b[order] : a[order].localeCompare(b[order])
      );
      this.previousOrder = order;
    } else {
      this.doctors.reverse();
      this.previousOrder = '';
    }
  }
}

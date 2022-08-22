import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageStaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../../shared/image-dialog/image-dialog.component';

@Component({
  selector: 'app-home-section1',
  templateUrl: './home-section1.component.html',
  styleUrl: './home-section1.component.css'
})
export class HomeSection1Component {
  images = [
    "https://lh3.googleusercontent.com/pw/ABLVV84ktwYdufYgDaeWdbhOvKQbL6coCGbMUjIZhNWFotpTEZxzUfW8V1x7gDHrWU-lETylDVu0_4TyLjK7ZsZkkmJCmbBV8Oa67f86grpbEwm-_roLFcxu",
    "https://lh3.googleusercontent.com/pw/ABLVV87FwIIVgT7ss0kGy8IXuG7dMJ0ElZaFEfX78EyqI2dOvhz8bRuOihRUhSJIZ3V7NUxA6wwYrhyJM2V_Uz3SHlD7LpdUsIzY5-iPJRwHyFFwtTRoOCoe",
    "https://lh3.googleusercontent.com/pw/ABLVV85leP7fURfoYx6yxNEFbJuNgs2rn5IcaqA3Ba8tYwZZhPMg6DkithPwUvKa6SUgqZng0boxXVd5AUhHqmTsDIhX1TRkb498_7s6deSmtrgDMyPTPKvg",
    "https://lh3.googleusercontent.com/pw/ABLVV85sgMxmECrWHgu8E1MPq8z3MD033IK2k3ZIjEWhRLbwAORZKLWFWsgGXNkJ61XAyO4II27se7EyRTH2vOdA10mAft9zkqBVuiL0nwuDZC0aFwitssjr",
    "https://lh3.googleusercontent.com/pw/ABLVV87Imm1P_ISOuXdAxYh1kiFcDBRThQscIS8j1Fqhd5ml8T1nTNufb_z95_GAlrsboN_u4WSYYC2cggO8wK0pK3L5r5R6Fhc6e_F0BMmA3Fv3tk6D69mB",
    "https://lh3.googleusercontent.com/pw/ABLVV84eoKSk1488cxLfUh153jq0AFK9YrQfsacKQsgDH-uKE25iwNj5qTW55a1N7PQotT93QdcdzUz-OX_T1wlcw6-mz62zsdk7yiZpqiJAD1-csBurpOwD",
    "https://lh3.googleusercontent.com/pw/ABLVV847a9v0Fx6RAEe3-8C3qczXLrEndWMIRQi-UWJBsJZ8unuFNZyGGUdfr_BrKgKVx3lWrnDnX20SsHyJnhJ6fAjrQzhSD-nj2xVAC0r7iBL5B3SK9lM8",
    "https://lh3.googleusercontent.com/pw/ABLVV85ij96DQv0OHpr5v0Yq9TfA2BPQpqRRfiWRMR5nukDtrMytPpNtbP68F2ZBRhMnZxlvWG1xKsW-hkNGsembfKrda6rFgLLjTQcrMxSO5kCFXEmmXbpy",
    "https://lh3.googleusercontent.com/pw/ABLVV86TAF09TbayIFQa4YZOrnHtlOiS0AGz7aqvYMHBz1HwwVjv5xqHKpJ9S81VV8l5pI8nOJEBC0_yhWRGKtoZXQW_SygEbPM5PMfYxpGm31aGu0WRLHgz",
    "https://lh3.googleusercontent.com/pw/ABLVV847NhMtj4jgDnTZPAZdkWldkXyM-6rS5p-ak9egle_cZwydm-Zb2kGaqNKest0jh5qVTz07ZC2uP8q7lGZo8sSqiZT-zcIIT7gDitqnqdDejlw-RSyw",
    "https://lh3.googleusercontent.com/pw/ABLVV875gm3FYt3BIea1FEYlLdEGL5vNHs_bIwVCWWipAsvYP8NqfHQUOV2kvtm3FiyE6TyXwzZ0Zh_YAwN6tJ0phk6qp_ATHKblx-r-d-dMr15uMylvCBPf",
    "https://lh3.googleusercontent.com/pw/ABLVV86vntDbulNJfPmJA9wB_OZz_bxidRyKcG86RGFOv621tBzZpQxKMisTO6uMyhqV8FqVPW-oco6P9h9JqFUfgCQ5H9kg4G_lLDMWqm6IAAMclr5pZGZvDyB9DaFRkjjiY3epj4p3k_NyuCVW7o6hIYaVmg"
  ];

  constructor(
    private _dialog: MatDialog
  ){}

  openDialog(img: string){
    this._dialog.open(ImageDialogComponent, {
      data:img
    })
  }
}

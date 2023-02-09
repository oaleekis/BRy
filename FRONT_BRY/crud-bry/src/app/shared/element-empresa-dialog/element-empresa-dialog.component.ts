import { Component, OnInit, Inject } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-element-empresa-dialog',
  templateUrl: './element-empresa-dialog.component.html',
  styleUrls: ['./element-empresa-dialog.component.scss']
})
export class ElementEmpresaDialogComponent implements OnInit {
  element!: Empresa;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Empresa,
    public dialogRef: MatDialogRef<ElementEmpresaDialogComponent>,
    ) { }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

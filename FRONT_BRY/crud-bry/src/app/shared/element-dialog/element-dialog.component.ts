import { Component, OnInit, Inject } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: Funcionario;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Funcionario,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    ) { }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

}

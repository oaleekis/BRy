import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Empresa } from 'src/app/models/Empresa';
import { EmpresaService } from "src/app/services/Empresa.service";
import { ElementEmpresaDialogComponent } from 'src/app/shared/element-empresa-dialog/element-empresa-dialog.component';



@Component({
  selector: 'app-empresa-home',
  templateUrl: './empresa-home.component.html',
  styleUrls: ['./empresa-home.component.scss'],
  providers: [EmpresaService]
})
export class EmpresaHomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'endereco', 'actions'];
  dataSource!: Empresa[];

  constructor(
    public dialog: MatDialog,
    public EmpresaService: EmpresaService
    ) {
      this.EmpresaService.getElements()
      .subscribe((data: Empresa[]) => {
        console.log(data);
        this.dataSource = data;
      })
    }

  ngOnInit(): void {
    
  }

  openDialog(empresa: Empresa | null): void {
    const dialogRef = this.dialog.open(ElementEmpresaDialogComponent, {
      width: '250px',
      data: empresa == null ? {
        id: null,
        nome: '',
        cnpj: null,
        endereco:'',
      } : empresa
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.EmpresaService.createElements(result)
        .subscribe((data: Empresa) =>{
          this.dataSource.push(result);
          this.table.renderRows();
        })
      }
    });
  }

  deleteElement(id: number): void {
    this.EmpresaService.deleteElement(id)
    .subscribe(() => {
      this.dataSource = this.dataSource.filter(p => p.id !== id);
    })
  }
}

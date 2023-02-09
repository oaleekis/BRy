import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from "src/app/services/Funcionario.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FuncionarioService]
})
export class HomeComponent implements OnInit{
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'login', 'nome', 'email', 'endereco', 'actions'];
  dataSource!: Funcionario[];

  constructor(
    public dialog: MatDialog,
    public FuncionarioService: FuncionarioService
    ) {
      this.FuncionarioService.getElements()
      .subscribe((data: Funcionario[]) => {
        console.log(data);
        this.dataSource = data;
      })
    }


  ngOnInit(): void {
    
  }

  openDialog(funcionario: Funcionario | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '400px',
      data: funcionario == null ? {
        id: null,
        login: '',
        nome: '',
        cpf: null,
        email:'',
        endereco:'',
        senha: '',
      } : funcionario
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.FuncionarioService.createElements(result)
        .subscribe((data: Funcionario) =>{
          this.dataSource.push(result);
          this.table.renderRows();
        })
      }
    });
  }

  deleteElement(id: number): void {
    this.FuncionarioService.deleteElement(id)
    .subscribe(() => {
      this.dataSource = this.dataSource.filter(p => p.id !== id);
    })
  }
}

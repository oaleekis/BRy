<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Funcionario;

class FuncionarioController extends Controller
{
    
    public function index() // Rota principal
    {
        return Funcionario::all();
    }

    public function store(Request $request) // Enviar para BD
    {
        $request->validate([
            'login' => 'required',
            'nome' => 'required',
            'cpf' => 'required',
            'email' => 'required',
            'endereco' => 'required',
            'senha' => 'required',
        ]);

        return Funcionario::create($request->all());
    }

    
    public function show($id) // Trazer informações por id
    {
        return Funcionario::findOrFail($id);
    }

    public function destroy($id) // Deleta apartir do id
    {
        return Funcionario::destroy($id);
    }

    
}

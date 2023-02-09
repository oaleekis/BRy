<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Empresa;

class EmpresaController extends Controller
{
    public function index() // Rota principal
    {
        return Empresa::all();
    }

    public function store(Request $request) // Enviar para BD
    {
        $request->validate([
            'nome' => 'required',
            'cnpj' => 'required',
            'endereco' => 'required',
        ]);

        return Empresa::create($request->all());
    }

    
    public function show($id) // Trazer informações por id
    {
        return Empresa::findOrFail($id);
    }

    public function destroy($id) // Deleta apartir do id
    {
        return Empresa::destroy($id);
    }
    
}

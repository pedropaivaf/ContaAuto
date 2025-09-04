from flask import Blueprint, request, jsonify
from datetime import datetime
import json
import os

contabilidade_bp = Blueprint('contabilidade', __name__)

# Simulação de dados para demonstração
clientes_data = []
documentos_data = []
relatorios_data = []

@contabilidade_bp.route('/contacto', methods=['POST'])
def enviar_contacto():
    """Endpoint para processar formulário de contacto"""
    try:
        data = request.get_json()
        
        # Validação básica
        required_fields = ['nome', 'empresa', 'email', 'telefone', 'mensagem']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Campo {field} é obrigatório'}), 400
        
        # Simular envio de email (em produção, usar serviço real)
        contacto = {
            'id': len(clientes_data) + 1,
            'nome': data['nome'],
            'empresa': data['empresa'],
            'email': data['email'],
            'telefone': data['telefone'],
            'mensagem': data['mensagem'],
            'data_contacto': datetime.now().isoformat(),
            'status': 'pendente'
        }
        
        clientes_data.append(contacto)
        
        return jsonify({
            'success': True,
            'message': 'Contacto enviado com sucesso! Entraremos em contacto em 24 horas.',
            'id': contacto['id']
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Erro interno do servidor'}), 500

@contabilidade_bp.route('/upload-documento', methods=['POST'])
def upload_documento():
    """Endpoint para upload de documentos fiscais"""
    try:
        if 'documento' not in request.files:
            return jsonify({'error': 'Nenhum arquivo enviado'}), 400
        
        file = request.files['documento']
        if file.filename == '':
            return jsonify({'error': 'Nome do arquivo inválido'}), 400
        
        # Validar tipo de arquivo
        allowed_extensions = {'pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx', 'xls', 'xlsx'}
        if not ('.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in allowed_extensions):
            return jsonify({'error': 'Tipo de arquivo não permitido'}), 400
        
        # Simular processamento do documento
        documento = {
            'id': len(documentos_data) + 1,
            'nome': file.filename,
            'tipo': file.filename.rsplit('.', 1)[1].lower(),
            'tamanho': len(file.read()),
            'data_upload': datetime.now().isoformat(),
            'status': 'processando',
            'cliente_id': request.form.get('cliente_id', 1)
        }
        
        documentos_data.append(documento)
        
        return jsonify({
            'success': True,
            'message': 'Documento enviado com sucesso!',
            'documento': documento
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Erro ao processar documento'}), 500

@contabilidade_bp.route('/calcular-impostos', methods=['POST'])
def calcular_impostos():
    """Endpoint para cálculo automático de impostos"""
    try:
        data = request.get_json()
        
        # Validação
        if not data.get('valor_bruto') or not data.get('tipo_empresa'):
            return jsonify({'error': 'Valor bruto e tipo de empresa são obrigatórios'}), 400
        
        valor_bruto = float(data['valor_bruto'])
        tipo_empresa = data['tipo_empresa']
        
        # Simulação de cálculo de impostos (valores fictícios para demonstração)
        if tipo_empresa == 'individual':
            irs = valor_bruto * 0.23  # 23% IRS
            ss = valor_bruto * 0.11   # 11% Segurança Social
            iva = valor_bruto * 0.23  # 23% IVA
        elif tipo_empresa == 'sociedade':
            irc = valor_bruto * 0.21  # 21% IRC
            ss = valor_bruto * 0.2375 # 23.75% Segurança Social
            iva = valor_bruto * 0.23  # 23% IVA
            irs = 0
        else:
            return jsonify({'error': 'Tipo de empresa inválido'}), 400
        
        if tipo_empresa == 'individual':
            total_impostos = irs + ss + iva
            valor_liquido = valor_bruto - total_impostos
            
            resultado = {
                'valor_bruto': valor_bruto,
                'irs': irs,
                'seguranca_social': ss,
                'iva': iva,
                'total_impostos': total_impostos,
                'valor_liquido': valor_liquido,
                'tipo_empresa': tipo_empresa
            }
        else:
            total_impostos = irc + ss + iva
            valor_liquido = valor_bruto - total_impostos
            
            resultado = {
                'valor_bruto': valor_bruto,
                'irc': irc,
                'seguranca_social': ss,
                'iva': iva,
                'total_impostos': total_impostos,
                'valor_liquido': valor_liquido,
                'tipo_empresa': tipo_empresa
            }
        
        return jsonify({
            'success': True,
            'calculo': resultado
        }), 200
        
    except ValueError:
        return jsonify({'error': 'Valor bruto deve ser um número válido'}), 400
    except Exception as e:
        return jsonify({'error': 'Erro no cálculo de impostos'}), 500

@contabilidade_bp.route('/gerar-relatorio', methods=['POST'])
def gerar_relatorio():
    """Endpoint para geração de relatórios financeiros"""
    try:
        data = request.get_json()
        
        tipo_relatorio = data.get('tipo', 'mensal')
        periodo = data.get('periodo', datetime.now().strftime('%Y-%m'))
        
        # Simulação de dados para relatório
        if tipo_relatorio == 'mensal':
            relatorio = {
                'id': len(relatorios_data) + 1,
                'tipo': 'Relatório Mensal',
                'periodo': periodo,
                'receitas': 15000.00,
                'despesas': 8500.00,
                'lucro_bruto': 6500.00,
                'impostos': 1495.00,
                'lucro_liquido': 5005.00,
                'data_geracao': datetime.now().isoformat(),
                'detalhes': {
                    'vendas': 12000.00,
                    'servicos': 3000.00,
                    'fornecedores': 5000.00,
                    'salarios': 2500.00,
                    'outros_custos': 1000.00
                }
            }
        elif tipo_relatorio == 'anual':
            relatorio = {
                'id': len(relatorios_data) + 1,
                'tipo': 'Relatório Anual',
                'periodo': periodo,
                'receitas': 180000.00,
                'despesas': 102000.00,
                'lucro_bruto': 78000.00,
                'impostos': 17940.00,
                'lucro_liquido': 60060.00,
                'data_geracao': datetime.now().isoformat(),
                'crescimento': '15%',
                'detalhes': {
                    'vendas': 144000.00,
                    'servicos': 36000.00,
                    'fornecedores': 60000.00,
                    'salarios': 30000.00,
                    'outros_custos': 12000.00
                }
            }
        else:
            return jsonify({'error': 'Tipo de relatório inválido'}), 400
        
        relatorios_data.append(relatorio)
        
        return jsonify({
            'success': True,
            'relatorio': relatorio
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Erro na geração do relatório'}), 500

@contabilidade_bp.route('/dashboard-dados', methods=['GET'])
def obter_dados_dashboard():
    """Endpoint para obter dados do dashboard"""
    try:
        # Simulação de dados para dashboard
        dados = {
            'resumo_financeiro': {
                'receitas_mes': 15000.00,
                'despesas_mes': 8500.00,
                'lucro_mes': 6500.00,
                'crescimento': '+12%'
            },
            'metricas': {
                'documentos_processados': len(documentos_data),
                'clientes_ativos': len(clientes_data),
                'relatorios_gerados': len(relatorios_data),
                'tempo_poupado': '45 horas'
            },
            'graficos': {
                'receitas_ultimos_6_meses': [
                    {'mes': 'Jan', 'valor': 12000},
                    {'mes': 'Fev', 'valor': 13500},
                    {'mes': 'Mar', 'valor': 11800},
                    {'mes': 'Abr', 'valor': 14200},
                    {'mes': 'Mai', 'valor': 15800},
                    {'mes': 'Jun', 'valor': 15000}
                ],
                'distribuicao_despesas': [
                    {'categoria': 'Fornecedores', 'valor': 5000, 'percentagem': 59},
                    {'categoria': 'Salários', 'valor': 2500, 'percentagem': 29},
                    {'categoria': 'Outros', 'valor': 1000, 'percentagem': 12}
                ]
            },
            'alertas': [
                {
                    'tipo': 'prazo',
                    'mensagem': 'Declaração de IVA vence em 5 dias',
                    'prioridade': 'alta'
                },
                {
                    'tipo': 'documento',
                    'mensagem': '3 documentos pendentes de processamento',
                    'prioridade': 'media'
                }
            ]
        }
        
        return jsonify({
            'success': True,
            'dados': dados
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Erro ao obter dados do dashboard'}), 500

@contabilidade_bp.route('/clientes', methods=['GET'])
def listar_clientes():
    """Endpoint para listar clientes"""
    try:
        return jsonify({
            'success': True,
            'clientes': clientes_data
        }), 200
    except Exception as e:
        return jsonify({'error': 'Erro ao listar clientes'}), 500

@contabilidade_bp.route('/documentos', methods=['GET'])
def listar_documentos():
    """Endpoint para listar documentos"""
    try:
        return jsonify({
            'success': True,
            'documentos': documentos_data
        }), 200
    except Exception as e:
        return jsonify({'error': 'Erro ao listar documentos'}), 500


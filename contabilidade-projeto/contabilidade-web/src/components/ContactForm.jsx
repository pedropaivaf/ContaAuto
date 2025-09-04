import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nome: '',
          empresa: '',
          email: '',
          telefone: '',
          mensagem: ''
        })
      } else {
        setSubmitStatus('error')
        console.error('Erro:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Erro de rede:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white text-gray-900">
      <CardHeader>
        <CardTitle>Solicitar Demonstração</CardTitle>
        <CardDescription>
          Preencha o formulário e entraremos em contacto em 24 horas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800">Mensagem enviada com sucesso! Entraremos em contacto em breve.</span>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-red-800">Erro ao enviar mensagem. Tente novamente.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <Input 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="O seu nome" 
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Empresa</label>
              <Input 
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Nome da empresa" 
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com" 
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Telefone</label>
            <Input 
              type="tel" 
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="+351 123 456 789" 
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <Textarea 
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Como podemos ajudar?" 
              rows={4} 
              required
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm


'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [screen, setScreen] = useState('manifesto')

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '24px',
      maxWidth: '480px',
      margin: '0 auto'
    }}>

      {screen === 'manifesto' && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '22px', lineHeight: '1.6', marginBottom: '16px' }}>
            Reflex не даёт советов.
          </p>
          <p style={{ fontSize: '22px', lineHeight: '1.6', marginBottom: '48px', color: '#aaa' }}>
            Он показывает то, что ты делаешь.
          </p>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '48px' }}>
            Если это то, что ты ищешь — продолжим.
          </p>
          <button
            onClick={() => setScreen('register')}
            style={{
              background: '#0D9488',
              color: 'white',
              border: 'none',
              padding: '16px 48px',
              fontSize: '16px',
              borderRadius: '8px'
            }}>
            Продолжить
          </button>
        </div>
      )}

      {screen === 'register' && (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: '#aaa' }}>
            14 дней — это минимум чтобы увидеть реальную картину.
          </p>
          <p style={{ fontSize: '16px', marginBottom: '48px', color: '#666' }}>
            До этого — просто отвечай на вопросы.
          </p>
          <button
            onClick={() => setScreen('morning')}
            style={{
              background: '#0D9488',
              color: 'white',
              border: 'none',
              padding: '16px 48px',
              fontSize: '16px',
              borderRadius: '8px'
            }}>
            Начать
          </button>
        </div>
      )}

      {screen === 'morning' && (
        <div style={{ width: '100%' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            День 1 из 14
          </p>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '32px' }}>
            Какое решение или выбор тебя ждёт сегодня?
          </p>
          <textarea
            placeholder="Например: ответить на предложение о работе..."
            style={{
              width: '100%',
              background: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '16px',
              color: '#f0f0f0',
              fontSize: '16px',
              minHeight: '120px',
              resize: 'none'
            }}
          />
          <button
            onClick={() => setScreen('morning2')}
            style={{
              marginTop: '24px',
              width: '100%',
              background: '#0D9488',
              color: 'white',
              border: 'none',
              padding: '16px',
              fontSize: '16px',
              borderRadius: '8px'
            }}>
            Далее
          </button>
        </div>
      )}

      {screen === 'morning2' && (
        <div style={{ width: '100%' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            День 1 из 14
          </p>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '40px' }}>
            Это решение возникло из внешней ситуации или ты сам его инициировал?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => setScreen('morning3')}
              style={{
                background: '#1a1a1a',
                color: '#f0f0f0',
                border: '1px solid #333',
                padding: '16px',
                fontSize: '16px',
                borderRadius: '8px'
              }}>
              Внешняя ситуация
            </button>
            <button
              onClick={() => setScreen('morning3')}
              style={{
                background: '#1a1a1a',
                color: '#f0f0f0',
                border: '1px solid #333',
                padding: '16px',
                fontSize: '16px',
                borderRadius: '8px'
              }}>
              Сам инициировал
            </button>
          </div>
        </div>
      )}

      {screen === 'morning3' && (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            День 1 из 14
          </p>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '48px' }}>
            Ответы записаны.
          </p>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Вернись вечером — один вопрос, 10 секунд.
          </p>
        </div>
      )}

    </main>
  )
}
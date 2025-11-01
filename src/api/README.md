# API Module Documentation

Esta carpeta contiene toda la lógica de comunicación con el backend de forma centralizada y organizada.

## 📁 Estructura

```
src/api/
├── config/
│   └── apiClient.ts          # Cliente Axios configurado con interceptores
│
├── services/                  # Servicios de API (endpoints)
│   ├── auth.service.ts        # Autenticación (login, logout, refresh)
│   ├── account.service.ts     # Cuentas (registro, perfil)
│   ├── jobs.service.ts        # Trabajos (búsqueda, aplicación)
│   └── index.ts              # Exportaciones centralizadas
│
├── types/                     # Tipos TypeScript
│   ├── auth.types.ts          # Tipos de autenticación
│   ├── user.types.ts          # Tipos de usuarios
│   ├── job.types.ts           # Tipos de trabajos
│   ├── common.types.ts        # Tipos comunes (paginación, respuestas)
│   └── index.ts              # Exportaciones centralizadas
│
├── utils/                     # Utilidades
│   ├── errorHandler.ts        # Manejo de errores centralizado
│   ├── tokenManager.ts        # Gestión de tokens
│   └── index.ts              # Exportaciones centralizadas
│
├── middleware/                # Middleware
│   ├── authGuard.ts           # Hook para proteger rutas
│   └── tokenValidator.ts      # Validación de tokens
│
└── index.ts                   # Exportación principal del módulo
```

## 🚀 Uso

### Importar servicios

```typescript
// Opción 1: Importar desde el módulo principal
import { authService, accountService, jobsService } from '@/api';

// Opción 2: Importar directamente
import { authService } from '@/api/services/auth.service';
```

### Ejemplo: Login

```typescript
import { authService } from '@/api';

const handleLogin = async (email: string, password: string) => {
  try {
    const response = await authService.login({ email, password });
    console.log('Login exitoso:', response);
    // Los tokens se guardan automáticamente
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Ejemplo: Registro

```typescript
import { accountService } from '@/api';

const handleRegister = async (data) => {
  try {
    const response = await accountService.register({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'candidate',
      termsAccepted: true,
    });
    console.log('Registro exitoso:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Ejemplo: Buscar trabajos

```typescript
import { jobsService } from '@/api';

const searchJobs = async () => {
  try {
    const response = await jobsService.getJobs({
      page: 1,
      limit: 10,
      category: 'tecnologia',
    });
    console.log('Trabajos:', response.data);
    console.log('Paginación:', response.pagination);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Proteger rutas con AuthGuard

```typescript
import { useAuthGuard } from '@/api';
import { useRouter } from 'next/navigation';

const ProtectedPage = () => {
  const authorized = useAuthGuard();
  const router = useRouter();

  if (authorized === null) return <div>Loading...</div>;
  if (!authorized) {
    router.push('/auth/signin');
    return null;
  }

  return <div>Contenido protegido</div>;
};
```

## 🔧 Características

### 1. Interceptores Automáticos

- **Request**: Agrega el token de autenticación automáticamente
- **Response**: Maneja errores y refresh token automático

### 2. Manejo de Errores Centralizado

Todos los errores se transforman en un formato consistente:

```typescript
interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
  timestamp: string;
}
```

### 3. Refresh Token Automático

Si el token expira (error 401), el sistema:
1. Intenta refrescar el token automáticamente
2. Reintenta la petición original
3. Si falla, redirige al login

### 4. Gestión de Tokens Segura

```typescript
import { TokenManager } from '@/api';

// Verificar autenticación
TokenManager.isAuthenticated();

// Obtener info de usuario
const user = TokenManager.getUserInfo();

// Limpiar sesión
TokenManager.clearAll();
```

## 📝 Variables de Entorno

Crear un archivo `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://tu-backend.com/api/v1
```

## 🎯 Mejores Prácticas

1. **Siempre usa los servicios**, no hagas llamadas directas con axios
2. **Importa tipos** para tener autocompletado
3. **Maneja errores** con try-catch
4. **No guardes tokens manualmente**, los servicios lo hacen automáticamente

## 🔜 Próximos Pasos

1. Agregar más servicios según necesites:
   - `employer.service.ts` - Para empleadores
   - `candidate.service.ts` - Para candidatos
   - `notifications.service.ts` - Para notificaciones

2. Considerar integrar React Query para:
   - Caché automático
   - Revalidación
   - Optimistic updates

## 📚 Recursos

- [Axios Documentation](https://axios-http.com/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

import { Providers } from './providers';
import { TodoApp } from '../components/TodoApp';

export default function Page() {
  return (
    <Providers>
      <TodoApp />
    </Providers>
  );
}

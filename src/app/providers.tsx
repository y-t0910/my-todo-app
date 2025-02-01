import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        {children}
      </div>
    </div>
  );
}

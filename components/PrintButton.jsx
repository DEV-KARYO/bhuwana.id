'use client';

import { Printer } from 'lucide-react';
import Button from './Button';

export default function PrintButton({ className = '', label = 'Cetak / Simpan PDF' }) {
  return (
    <Button
      onClick={() => window.print()}
      variant="primary"
      className={`inline-flex ${className}`.trim()}
    >
      <Printer size={16} className="mr-2" /> {label}
    </Button>
  );
}

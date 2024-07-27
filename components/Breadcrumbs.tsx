import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// Define TypeScript interface for breadcrumb items
interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Define props for the BreadcrumbsComponent
interface BreadcrumbsComponentProps {
  items: BreadcrumbItem[];
  className?: string; // Add optional className prop
}

const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({ items, className }) => {
  return (
    <Breadcrumbs 
      separator={<span style={{ color: 'white', fontWeight: 'bold' }}>{'>'}</span>} 
      aria-label="breadcrumb"
      className={className} // Apply the className prop
    >
      {items.map((item, index) => (
        item.href ? (
          <Link 
            key={index} 
            href={item.href} 
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography 
            key={index} 
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            {item.label}
          </Typography>
        )
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;

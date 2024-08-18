import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject the Router

  // Check if the userToken exists in localStorage
  if (localStorage.getItem('userToken') !== null) {
    return true; // Allow navigation
  } else {
    router.navigate(['/login']); // Redirect to the login page
    return false; // Block navigation
  }
};

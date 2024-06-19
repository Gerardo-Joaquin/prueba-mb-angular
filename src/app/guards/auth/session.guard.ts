import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const sessionGuard: CanActivateFn = (route, state) => {
  const data = localStorage.getItem('user-session')
  const router = inject(Router)
  if (data) {
    return router.parseUrl('/home/landing');
  } 
  return true;
};

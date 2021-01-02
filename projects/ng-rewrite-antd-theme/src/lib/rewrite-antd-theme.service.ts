import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RewriteAntdThemeService {
  lessLoaded = false;
  constructor() {}

  initChangeColor(): void {
    const node = document.createElement('link');
    node.rel = 'stylesheet/less';
    node.type = 'text/css';
    node.href = '/assets/theme/colors.less';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  changeColorPrimary(color: string): void {
    const changeColor = () => {
      (window as any).less
        .modifyVars({
          '@primary-color': color,
        })
        .then(() => {
          console.info('Change successful');
        })
        .catch((error: any) => {
          console.error('Change failed', error);
        });
    };

    const lessUrl = './../assets/less.min.js';

    if (this.lessLoaded) {
      changeColor();
    } else {
      (window as any).less = {
        async: true,
      };
      this.loadScript(lessUrl).then(() => {
        this.lessLoaded = true;
        changeColor();
      });
    }
  }

  loadScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onload = () => resolve();
      script.onerror = (e) => reject(e);
      document.head!.appendChild(script);
    });
  }
}

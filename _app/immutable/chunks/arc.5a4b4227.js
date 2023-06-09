import{c as z,p as sn}from"./constant.6af51708.js";import{b1 as en,b2 as y,aj as ln,b3 as G,b4 as P,b5 as K,b6 as k,b7 as rn,b8 as an,b9 as t,ba as un,bb as on,bc as tn}from"./state.a4b22a68.js";function cn(l){return l.innerRadius}function fn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,w,j,h,v,B,r){var s=w-l,n=j-x,m=B-h,i=r-v,a=i*s-m*n;if(!(a*a<y))return a=(m*(x-v)-i*(l-h))/a,[l+a*s,x+a*n]}function U(l,x,w,j,h,v,B){var r=l-w,s=x-j,n=(B?v:-v)/K(r*r+s*s),m=n*s,i=-n*r,a=l+m,c=x+i,f=w+m,D=j+i,o=(a+f)/2,E=(c+D)/2,p=f-a,g=D-c,A=p*p+g*g,I=h-v,T=a*D-f*c,O=(g<0?-1:1)*K(tn(0,I*I*A-T*T)),S=(T*g-p*O)/A,d=(-T*p-g*O)/A,R=(T*g+p*O)/A,b=(-T*p+g*O)/A,e=S-o,u=d-E,C=R-o,F=b-E;return e*e+u*u>C*C+F*F&&(S=R,d=b),{cx:S,cy:d,x01:-m,y01:-i,x11:S*(h/I-1),y11:d*(h/I-1)}}function hn(){var l=cn,x=fn,w=z(0),j=null,h=yn,v=gn,B=mn,r=null;function s(){var n,m,i=+l.apply(this,arguments),a=+x.apply(this,arguments),c=h.apply(this,arguments)-en,f=v.apply(this,arguments)-en,D=rn(f-c),o=f>c;if(r||(r=n=sn()),a<i&&(m=a,a=i,i=m),!(a>y))r.moveTo(0,0);else if(D>ln-y)r.moveTo(a*G(c),a*P(c)),r.arc(0,0,a,c,f,!o),i>y&&(r.moveTo(i*G(f),i*P(f)),r.arc(0,0,i,f,c,o));else{var E=c,p=f,g=c,A=f,I=D,T=D,O=B.apply(this,arguments)/2,S=O>y&&(j?+j.apply(this,arguments):K(i*i+a*a)),d=k(rn(a-i)/2,+w.apply(this,arguments)),R=d,b=d,e,u;if(S>y){var C=un(S/i*P(O)),F=un(S/a*P(O));(I-=C*2)>y?(C*=o?1:-1,g+=C,A-=C):(I=0,g=A=(c+f)/2),(T-=F*2)>y?(F*=o?1:-1,E+=F,p-=F):(T=0,E=p=(c+f)/2)}var H=a*G(E),J=a*P(E),L=i*G(A),M=i*P(A);if(d>y){var N=a*G(p),Q=a*P(p),V=i*G(g),W=i*P(g),q;if(D<an&&(q=pn(H,J,V,W,N,Q,L,M))){var X=H-q[0],Y=J-q[1],Z=N-q[0],$=Q-q[1],_=1/P(on((X*Z+Y*$)/(K(X*X+Y*Y)*K(Z*Z+$*$)))/2),nn=K(q[0]*q[0]+q[1]*q[1]);R=k(d,(i-nn)/(_-1)),b=k(d,(a-nn)/(_+1))}}T>y?b>y?(e=U(V,W,H,J,a,b,o),u=U(N,Q,L,M,a,b,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),b<d?r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,b,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(H,J),r.arc(0,0,a,E,p,!o)):r.moveTo(H,J),!(i>y)||!(I>y)?r.lineTo(L,M):R>y?(e=U(L,M,N,Q,i,-R,o),u=U(H,J,V,W,i,-R,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),R<d?r.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,R,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,i,A,g,o)}if(r.closePath(),n)return r=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-an/2;return[G(m)*n,P(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:z(+n),s):x},s.cornerRadius=function(n){return arguments.length?(w=typeof n=="function"?n:z(+n),s):w},s.padRadius=function(n){return arguments.length?(j=n==null?null:typeof n=="function"?n:z(+n),s):j},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),s):v},s.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),s):B},s.context=function(n){return arguments.length?(r=n??null,s):r},s}export{hn as a};

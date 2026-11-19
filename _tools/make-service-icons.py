# Rebuild assets/service-*.webp from the original icon PNGs: transparent background, same scale, 5:4.
# The tile frame is drawn by .service-tile in scw.css. Source paths point to the old UUID files in assets/.
import glob
import numpy as np
from PIL import Image
srcs={'multimedia':'8985DF0D','tuning':'85B31C9E','retrofits':'CBCBF777','keys':'9806934B','sound':'42C465E5','coding':'B8974525'}
W,H=600,480          # uniform canvas (5:4)
BOX_W,BOX_H=0.80,0.78  # glyph+label fits in this share of the canvas
for k,v in srcs.items():
    f=glob.glob(f'assets/{v}*')[0]
    a=np.asarray(Image.open(f).convert('RGB')).astype(float)
    bg=np.median(a[:20,:20].reshape(-1,3),axis=0)
    mx=a.max(axis=2)
    # 1) frame = bright-ish pixels; take bbox, then inset to drop the frame line itself
    ys,xs=np.where(mx>bg.max()+45)
    y0,y1,x0,x1=ys.min(),ys.max(),xs.min(),xs.max()
    inset=int(0.05*min(y1-y0,x1-x0))
    a=a[y0+inset:y1-inset,x0+inset:x1-inset]
    # 2) glyph bbox inside the frame
    mx=a.max(axis=2)
    ys,xs=np.where(mx>bg.max()+45)
    a=a[ys.min():ys.max()+1,xs.min():xs.max()+1]
    # 3) background -> transparent (unpremultiply over the dark bg)
    d=np.clip(a-bg,0,255)
    alpha=np.clip(d.max(axis=2)/150.0,0,1)
    rgb=np.where(alpha[...,None]>0,bg+d/np.maximum(alpha[...,None],1e-3),0)
    rgba=np.dstack([np.clip(rgb,0,255),alpha*255]).astype(np.uint8)
    g=Image.fromarray(rgba,'RGBA')
    s=min(W*BOX_W/g.width,H*BOX_H/g.height)
    g=g.resize((round(g.width*s),round(g.height*s)),Image.LANCZOS)
    c=Image.new('RGBA',(W,H),(0,0,0,0)); c.paste(g,((W-g.width)//2,(H-g.height)//2),g)
    c.save(f'assets/service-{"sound-isolation" if k=="sound" else k}.webp','WEBP',quality=88,method=6)
    print(k,'glyph',g.size)

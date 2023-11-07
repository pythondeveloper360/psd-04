from tkinter import *
import tkinter.font as font
from json import loads
products = []

def loadProducts():
    global products
    pr = loads(open('products.json','r').read())
    products = pr.get('products')
    _font  = font.Font(family='Times New Roman', size=35, weight="bold")
    for product in products:
        Button(master=productFrame,text=product ,fg='white',bg = 'green',font=_font).pack()
root = Tk()
root.title('POS')
root.geometry('900x700')
selectedProductFrame = Frame(master=root,width=600,height=700,bg='black')
selectedProductFrame.place(x = 0,y = 0)
productFrame = Frame(master=root,bg='yellow',width=300,height=700)
productFrame.place(x = 600,y = 0)
loadProducts()





root.mainloop()

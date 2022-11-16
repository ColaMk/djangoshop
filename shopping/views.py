from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'cola.html')

def search(request):
    # 获取用户输入的商品名称
    q = request.GET.get('search')
    return render(request, 'search.html', {'name': q})
# 个人简历网站

这是一个现代极简风个人简历网页，适合部署到 GitHub Pages。

## 部署方式

1. 在 GitHub 仓库中打开 Settings
2. 进入 Pages
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`，Folder 选择 `/root`
5. 保存后即可访问 `https://<username>.github.io/<repo>/`

## 本地预览

直接打开 `index.html` 即可预览，或使用本地静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`

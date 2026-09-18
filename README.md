# Embodied AI Portfolio

一个无构建依赖的静态作品集，可直接部署到 GitHub Pages。

## 本地预览

在 `portfolio` 目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 创建名为 `<username>.github.io` 的 GitHub 仓库。
2. 将本目录中的全部内容推送到仓库 `main` 分支根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**、`main`、`/(root)`。
5. 网站将发布到 `https://<username>.github.io`。

## 内容说明

- `assets/videos/simulation`：来自 `demo_ue_isaac`
- `assets/videos/perception`：来自 `demo_ral_icra`
- `assets/videos/control`：来自 `demo_control`

页面仅展示上述三个素材目录；`assets/videos/vla-agent` 保留在仓库中，但不在页面展示。所有视频默认静音、循环播放，并仅在进入可视区域时播放。

/****************
 *  git常规操作  *
 ****************/

// 本地项目上传到git
git init // 初始化git仓库
git add . // 添加所有文件到暂存区
git commit -m"添加注释"
git remote add origin https://git.coding.net/ggzhangCodingNet/test.git // 关联远程库
git pull --rebase origin master // 获取远程库与本地同步合并
git push -u origin master // 将当前分支推送到远程

// 切换分支
git checkout -b dev // 新建并切换至新分支
git push origin dev // push新分支到远端
git branch --set-upstream-to=origin/dev // 关联远端分支和本地分支
git pull // 验证关联分支是否成功
git merge dev // 合并分支代码
git branch -D dev // 删除本地分支

// 代码回滚
git log // 查看之前的代码提交
git reset --hard commit-id // 回滚到相应commit-id的代码提交状态

// 解决pull引起的冲突
git stash // 暂存本地的所有修改
git stash list // 查看保存的暂存信息
git pull
git stash pop stash@{0} // 还原暂存内容
// 手动解决冲突文件，然后提交代码
git stash drop <stash@{0}> // 删除stash

// gerrit推送代码
git push origin HEAD:refs/for/master


/******************
 *  linux常用命令  *
 ******************/

// 查看公钥
cd ~/.ssh 然后 cat id_rsa.pub 或者 vim id_rsa.pub
或者直接 cat ~/.ssh/id_rsa.pub

// 查看私钥
cat ~/.ssh/id_rsa

// 生成公钥
ssh-keygen
# Configure tooling
    - Configure user information for all local repositories

        1. $ git config --global user.email "[email address]"
            - Sets the email you want attached to your commit transactions

        2. $ git config --global user.name "[name]"
            - Sets the name you want attached to your commit transactions




# Create Repositories
    - When starting out with a new repository, you only need to do it 
      once; either locally, then push to GitHub, or by cloning an 
      existing repository.

     1. $ git init
          - Turn an existing directory into a git repository

     2. $ git clone [url]
          - Clone (download) a repository that already exists on 
            GitHub, including all of the files, branches, and commits




# The .gitgnore file
    - Sometimes it may be a good idea to exclude files from being 
      tracked with Git.





# Branches
   -  Any commits you make will be made on the branch you're currently 
      “checked out” to. Use git status to see which branch that is.


    1. $ git branch [branch-name]
        - Creates a new branch
   
    2. git branch -d [branch-name]
        - Deletes the specified branch

    3. $ git merge [branch]
        - Combines the specified branch’s history into the 
          current branch. This is usually done in pull requests, 
          but is an important Git operation.

   4. $ git checkout [branch-name]
        - Switches to the specified branch and updates the 
          working directory




# Synchronize changes
    - Synchronize your local repository with the remote repository 
      on GitHub.com
    
    1. $ git fetch
        - Downloads all history from the remote tracking branches

    2. $ git merge
        - Combines remote tracking branch into current local branch

    3. $ git push
        - Uploads all local branch commits to GitHub

    4. $ git pull
        - Updates your current local working branch with all new 
          commits from the corresponding remote branch on GitHub. 
          git pull is a combination of git fetch and git merge





# Make changes
    - Browse and inspect the evolution of project files

    1. $ git diff [first-branch]...[second-branch]
        - Shows content differences between two branches

    2. $ git log --follow [file]
        - Lists version history for a file, including renames

    3. $ git log
        - Lists version history for the current branch

    4. $ git commit -m "[descriptive message]"
        - Records file snapshots permanently in version history

    5. $ git add [file]
        - Snapshots the file in preparation for versioning

    6. $ git show [commit]
        - Outputs metadata and content changes of the specified commit
        
        
        
        
# Amending the most recent commit message

    -- Method 1 (Change latest commit):

        1. git commit --amend
            - will open your editor, allowing you to change the commit message of the most recent commit.

        2. git commit --amend -m "New commit message"
            -  you can set the commit message directly in the command line

        3. git push <remote> <branch> --force
             # Or
           git push <remote> <branch> -f
                - If you've already pushed your commit up to your remote branch, then - after amending your commit locally (as described above) - you'll also need to force push the commit with:
                - Warning: force-pushing will overwrite the remote branch with the state of your local one.
                - Warning: be cautious about amending commits that you have already shared with other people. 

    -- Method 2 (Iteractive rebase):

          1. git rebase -i HEAD~n
            - Iteractive rebase. 
            - This allows you to edit any message you want to update even if it's not the latest message.
            - n is the number of commits up to the last commit you want to be able to edit
            
    -- Reference:
        - https://stackoverflow.com/questions/179123/how-to-modify-existing-unpushed-commit-messages


# Merging and Rebasing

    -- Merge Option:
    
         1. git checkout feature
         2. git merge main
            - The simplest method is to use something like the following to merge the main branch into the feature branch:
            
![image](https://user-images.githubusercontent.com/62681943/195256723-1ec8bbcf-b9f6-452a-a908-d9b4a7d86bba.png)


    --- The Rebase Option
    
        1. git checkout feature
        2. git rebase main
            - This effectively incorporates all of the recent commits in main and moves the entire feature branch to start 
              at the end of the main branch. 
            - Rebasing, however, rewrites the project history by issuing brand-new commits for each commit in the original branch, 
              as opposed to using a merge commit.
            - Benefit:
                1. You get a much cleaner project history. It eliminates the unnecessary merge commits required by git merge
                2. As you can see in the figure above, rebasing also produces a flawlessly linear project history. 
                  You can track a feature's tip all the way back to the project's genesis without encountering any forks.
                  
![image](https://user-images.githubusercontent.com/62681943/195257581-05291456-8dee-4564-a0e9-df6d34aff16d.png)


    --- Interactive Rebasing
    
        1. git checkout feature 
        2. git rebase -i main
            - With interactive rebasing, you may make changes to commits as they are transferred to the new branch. 
            - Given that it gives total control over the commit history of the branch, this is even more potent than an automatic rebase. 
            - Typically, this is used to clean up a messy history before merging a feature branch into main.
            - This will open a text editor listing all of the commits that are about to be moved:
                pick 33d5b7a Message for commit #1
                pick 9480b3d Message for commit #2
                pick 5c67e61 Message for commit #3

![image](https://user-images.githubusercontent.com/62681943/195258525-60849895-e7df-4fea-bec3-acac51b42ea2.png)


    --- The Golden Rule of Rebasing
    
        - All of the main commits are moved to the tip of the feature by the rebase. 
        - That this only occurred in your repository is a concern. 
        - The original main is still being used by all other developers. 
        - Rebasing generates brand-new commits, which causes Git to believe that your main branch's history has changed from everyone else's.
        - The two main branches must be merged back together in order to be brought into sync. 
        - This results in an additional merge commit and two sets of commits that include the identical modifications.
        - Therefore, always ask yourself "Is anyone else looking at this branch?" before doing git rebase. If the answer is yes, stop typing and begin considering a non-destructive strategy to make your modifications (e.g., the git revert command). Otherwise, you are free to alter history however you see fit.
        
![image](https://user-images.githubusercontent.com/62681943/195259144-6eeca116-00bd-4bdf-9314-e2baa2baf1f5.png)


- References for Rebasing
    - https://www.atlassian.com/git/tutorials/merging-vs-rebasing 

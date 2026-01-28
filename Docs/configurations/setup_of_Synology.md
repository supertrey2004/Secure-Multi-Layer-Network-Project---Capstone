# Synology

1. Log in with admin credentials.

2. Open SAN Manager and setup drive
    - go to iSCSI
    - click create
        - Put a name and hit next
        - Map later
        - click done
    - go to LUN
    - click create
        - Put a name and set capacity to 1000
        - Leave everything else default and then hit done
    - click edit
        - Go to mapping
        - deselect all other selections and select your iSCSI 
        - save

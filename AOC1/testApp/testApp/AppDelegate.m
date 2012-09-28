//
//  AppDelegate.m
//  testApp
//
//  Created by Derek Bertubin on 9/27/12.
//  Copyright (c) 2012 Derek Bertubin. All rights reserved.
//

#import "AppDelegate.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    // Override point for customization after application launch.
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    
//  Create a new Empty Application Project
    // This you can tell because you are now looking at this page.
    
//  Create a variable using the float data type. Cast the float to an int and using NSLog, output both the initial float value as well as the int value.
    
    // Declare float
    float myFloat = 55.1452;
    
    // Casting with myFloat into myInt using (int)myFloat
    int myInt = (int)myFloat;
    // Outputing myInt using NSLog
    NSLog(@"myInt=%d",myInt);
    
//  Perform an AND, OR comparison. Use float, int and BOOL types. BOOL values should be YES or NO and written in all caps.
//  Use an if, else if and else check using any of the data types of your choice.
    // AND comparison using the myInt and myFloat variables above in an IF
    
    if ((myInt > 1) && (myInt < 100)){
        NSLog(@"myInt is Between 1 and 100");
    }
    
    else{
        NSLog(@"myInt is not an acceptable number. Please give myFloat another number between 1 and 100.");
    }
// OR comparison using the myInt and myFloat variables above in an IF
    if ((myInt < 40) || (myInt < 60)){
        NSLog(@"myInt is within the median range.");
    }
    
    else{
        NSLog(@"myInt is outside the median range");
    }
    
    
    for (int count =0; count < 15; count++) {
        
        // Print out looped value
        NSLog(@" Count is: %d", count);
        
        if (count != 0) {
            NSLog(@"Count value is equal to a BOOL YES");
        }
        
        else if (count == 0){
            NSLog(@"Count value is equal to a BOOL NO");
        }
        
    }

    
//  Perform a single for loop printing out values to the console
    
    //loop intialize; loop condition; loop expression
    for (int count =0; count < 15; count++) {
        
        // Print out looped value
        NSLog(@" Count is: %d", count);
        
    }
    
//  Perform a nested loop printing out values to the console
    //loop intialize; loop condition; loop expression
    
    
    
    if (myInt != 0)  {
        for (myInt =15; myInt <= 30; myInt++) {
            // Print out looped value
            NSLog(@" Nested Count is: %d", myInt);
           
        }
    
            
    }
    
    // I did get some inspiration for this from //https://gist.github.com/2629780
    /* BOOL same(int myInt, int count);{
     if(same(myInt - count)== YES){
     NSLog(@"myInt != count");
     }
     else {
     NSLog(@"myInt == count");
     }
     }*/
    
//  Perform a while loop that increments an int variable and outputs to the console.
    
    int demoCount = 0;
    
    while (demoCount < 10) {
        
        demoCount++;
        
        NSLog(@"demoCount = %d", demoCount);
        
    }
    
    
    
    
    
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application
{
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
